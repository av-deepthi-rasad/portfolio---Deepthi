import { useState } from 'react';
import { profile } from '../data/portfolioData';

const LINKS = [
  { key: 'EMAIL', value: profile.email, href: `mailto:${profile.email}` },
  { key: 'PHONE', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { key: 'LINKEDIN', value: '/in/deepthirasad', href: profile.linkedin },
  { key: 'GITHUB', value: '/deepthirasad', href: profile.github },
];

// Sends straight to profile.email via FormSubmit (formsubmit.co) — a
// backend-less form relay, no API key needed. The very first message ever
// sent triggers a one-time "confirm this inbox" email from FormSubmit to
// profile.email; after that link is clicked once, every submission after
// arrives normally.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.msg.trim()) errors.msg = 'Please enter a message.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (field) => (e) => {
    const { value } = e.target;
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
    setStatus((s) => (s === 'sent' || s === 'error' ? 'idle' : s));
  };

  const send = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.msg,
          _subject: `Portfolio contact form — message from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', msg: '' });
    } catch {
      setStatus('error');
    }
  };

  const sending = status === 'sending';
  const label =
    status === 'sending'
      ? 'Sending…'
      : status === 'sent'
        ? 'Thanks — I will reply soon ✓'
        : status === 'error'
          ? 'Try again'
          : 'Send message';

  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-10 pt-[74px] pb-[110px]">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <div>
          <div className="font-mono text-[11px] text-muted-2 tracking-[.14em]">/ CONTACT</div>
          <h2 className="mt-4 font-display font-bold text-[clamp(38px,4.6vw,62px)] leading-[1.02] tracking-[-0.03em] text-paper">
            Let's build
            <br />
            something.
          </h2>
          <p className="mt-[18px] mb-[34px] max-w-md text-base leading-relaxed text-muted">
            Open to full-stack engineering roles and freelance work. Fastest reply is email.
          </p>

          <div className="flex flex-col gap-2.5 max-w-md">
            {LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target={link.key === 'LINKEDIN' || link.key === 'GITHUB' ? '_blank' : undefined}
                rel={link.key === 'LINKEDIN' || link.key === 'GITHUB' ? 'noreferrer' : undefined}
                className="flex items-center justify-between px-5 py-[18px] rounded-2xl border border-white/[0.09] bg-white/[0.025] text-paper hover:border-signal/50 hover:bg-signal/[0.07] transition-colors"
              >
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[10.5px] text-muted-2 tracking-[.1em]">
                    {link.key}
                  </span>
                  <span className="font-medium text-[15.5px]">{link.value}</span>
                </span>
                <span className="text-signal">→</span>
              </a>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="reveal p-8 rounded-[22px] border border-white/[0.09] bg-gradient-to-br from-white/5 to-white/[0.015]"
        >
          <div className="mb-5 font-mono text-[11px] text-signal tracking-[.1em]">
            SEND A MESSAGE
          </div>
          <form onSubmit={send} noValidate className="flex flex-col gap-3.5">
            <div>
              <input
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                className={`w-full px-4 py-3.5 rounded-xl border bg-black/35 text-paper text-[15px] outline-none transition-colors ${
                  errors.name ? 'border-red-400/70' : 'border-white/10 focus:border-signal/60'
                }`}
              />
              {errors.name && <p className="mt-1.5 text-[12.5px] text-red-400">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="Email address"
                aria-invalid={!!errors.email}
                className={`w-full px-4 py-3.5 rounded-xl border bg-black/35 text-paper text-[15px] outline-none transition-colors ${
                  errors.email ? 'border-red-400/70' : 'border-white/10 focus:border-signal/60'
                }`}
              />
              {errors.email && <p className="mt-1.5 text-[12.5px] text-red-400">{errors.email}</p>}
            </div>

            <div>
              <textarea
                value={form.msg}
                onChange={update('msg')}
                rows={5}
                placeholder="What are you building?"
                aria-invalid={!!errors.msg}
                className={`w-full px-4 py-3.5 rounded-xl border bg-black/35 text-paper text-[15px] outline-none transition-colors resize-y ${
                  errors.msg ? 'border-red-400/70' : 'border-white/10 focus:border-signal/60'
                }`}
              />
              {errors.msg && <p className="mt-1.5 text-[12.5px] text-red-400">{errors.msg}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-1 px-[22px] py-[15px] rounded-xl bg-gradient-to-br from-signal to-signal-dim text-ink font-semibold text-[15px] hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {label}
            </button>

            {status === 'error' && (
              <p className="text-[12.5px] text-red-400">
                Something went wrong sending that — please email me directly at{' '}
                <a href={`mailto:${profile.email}`} className="underline hover:text-red-300">
                  {profile.email}
                </a>{' '}
                instead.
              </p>
            )}
          </form>

          <div className="mt-[22px] pt-5 border-t border-white/[0.08] flex gap-7 flex-wrap">
            <div>
              <div className="font-mono text-[10.5px] text-muted-2 tracking-[.1em]">BASED IN</div>
              <div className="mt-1.5 font-medium text-sm text-paper">{profile.basedIn}</div>
            </div>
            <div>
              <div className="font-mono text-[10.5px] text-muted-2 tracking-[.1em]">LANGUAGES</div>
              <div className="mt-1.5 font-medium text-sm text-paper">{profile.languages}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
