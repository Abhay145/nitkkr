import Link from 'next/link';
import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';

export default async function NotFound({
  params: { locale },
}: {
  params: { catchAll: string[]; locale: string };
}) {
  const text = (await getTranslations(locale)).NotFound;

  return (
    <article className="flex h-screen items-center justify-center text-error">
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-20 md:space-y-0">
        <div className="text-center md:text-left">
          <h1
            className="font-fingerpaint text-[80px] leading-none sm:text-[120px] md:text-[150px] lg:text-[190px]"
            style={{
              background: 'linear-gradient(to top, #E7695F, #E13F32)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {text.title}
          </h1>
          <p
            className="font-poppins text-center text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px]"
            style={{
              fontWeight: 500,
              maxWidth: '361px',
              margin: '0 auto',
            }}
          >
            {text.description}
          </p>
          <div className="w-[404px] text-center">
            <Link
              href={`/${locale}`}
              className="decoration-skip-ink-none block text-center text-[30px] font-medium leading-[48px] decoration-[from-font]"
            >
              {text.backHome}
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="assets/error-2.png"
            alt="Work in Progress"
            width={661}
            height={513}
            className="ml-4 h-auto w-[300px]  opacity-50 sm:ml-8 sm:w-[400px] md:ml-12 md:w-[500px] lg:w-[661px]"
          />
        </div>
      </div>
    </article>
  );
}
