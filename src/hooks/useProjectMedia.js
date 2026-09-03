import { useEffect, useState } from 'react';

/**
 * Auto-discovers project media from /public/projects/<id>/ — no data-file
 * editing needed. Drop in whatever you have and it shows up:
 *   /projects/<id>/1.jpg, 2.jpg, 3.jpg ...  any number of screenshots
 *   /projects/<id>/video.mp4                optional, fine to skip
 * (.png also works for the numbered screenshots.) Missing files are just
 * silently skipped, so it's safe to probe for more than a project has.
 */

function probeFirst(urls) {
  return new Promise((resolve) => {
    let remaining = urls.length;
    let done = false;
    urls.forEach((url) => {
      const img = new Image();
      img.onload = () => {
        if (!done) {
          done = true;
          resolve(url);
        }
      };
      img.onerror = () => {
        remaining -= 1;
        if (!done && remaining === 0) resolve(null);
      };
      img.src = url;
    });
  });
}

function probeVideo(url) {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.onloadedmetadata = () => resolve(url);
    video.onerror = () => resolve(null);
    video.src = url;
  });
}

export function useProjectMedia(id, { limit = 8 } = {}) {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setImages([]);
    setVideo(null);
    const base = `/projects/${id}`;

    Promise.all(
      Array.from({ length: limit }, (_, i) => i + 1).map((n) =>
        probeFirst([`${base}/${n}.jpg`, `${base}/${n}.png`]).then((url) => ({ n, url }))
      )
    ).then((results) => {
      if (cancelled) return;
      const found = results
        .filter((r) => r.url)
        .sort((a, b) => a.n - b.n)
        .map((r) => r.url);
      setImages(found);
    });

    probeVideo(`${base}/video.mp4`).then((url) => {
      if (!cancelled && url) setVideo(url);
    });

    return () => {
      cancelled = true;
    };
  }, [id, limit]);

  return { images, video };
}
