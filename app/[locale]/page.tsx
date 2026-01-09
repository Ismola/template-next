'use client';

import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { messages } from '@/config/text';
import Link from 'next/link';


export default function Home() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] || 'es') as keyof typeof messages;
  const t = messages[locale] || messages.en;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">{t.welcome}</p>
        <LanguageSwitcher />
        <ThemeSwitcher />
        <Link href={`/${locale}/${t["slug.game"]}`} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {t.startGame}
        </Link>

        <a
          href="https://github.com/Ismola/template-next"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          aria-label="GitHub Repository"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </a>

      </div>
    </div>
  );
}
