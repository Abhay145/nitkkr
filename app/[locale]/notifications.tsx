import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import HorsesRunning from '~/components/horses-running';
import { getTranslations } from '~/i18n/translations';
import { getKeys } from '~/lib/utils';

export default async function Notifications({
  category: currentCategory,
  locale,
}: {
  category: 'academic' | 'tenders' | 'workshops' | 'recruitement';
  locale: string;
}) {
  const text = (await getTranslations(locale)).Notifications;

  const notifications = {
    academic: {
      localisedName: text.categories[0],
      items: [...Array<number>(40)].map(() => {
        return {
          label:
            'Information regarding specialization for the post of Technical Assistant (Ref.:Advt.No.03/2023 No.129)',
          value: '/',
        };
      }),
    },
    tenders: {
      localisedName: text.categories[1],
      items: [...Array<number>(4)].map(() => {
        return {
          label:
            'Information regarding specialization for the post of Technical Assistant (Ref.:Advt.No.03/2023 No.129)',
          value: '/',
        };
      }),
    },
    workshops: { localisedName: text.categories[2], items: [] },
    recruitement: { localisedName: text.categories[3], items: [] },
  };

  return (
    <article
      className="min-w-full bg-notifications bg-cover bg-no-repeat py-40"
      id="notifications"
    >
      <Link href="#notifications">
        <header className="container mx-auto mb-20 flex max-w-fit flex-row">
          <HorsesRunning direction="left" />
          <h2 className="my-auto">N</h2>
          <Image
            alt="O"
            className="-mx-1 my-auto h-10 w-12 rotate-[90.66deg]"
            height={0}
            width={0}
            src="https://s3-alpha-sig.figma.com/img/7db9/c4c1/4eb207d47d921a188206eed6516fae23?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YFIA~KzF5YY2tI~FelEQ9qOgTrm7rQrclT3~cQ2G9oTeWj-TjFVAFWBDk-vVPgwUkuWVA2IyirKlOlHVIzifLp1CCE7eVOmNk0zRiEhuuz1h5z6fKDRV9on7wjD4TTPIdg4cz0eDfxwKdQ9pPephjSYDZrcSEK5FcfOZPterorVhg0EaOcArC7W7bD85ls4bv9hj9eFrGdDWDF-qigj8o5um2Sc26nf5mt-Mebhf5WxgnjCuKxpvY5iEpliVEpYZvTVk2EHg0SPLZOAo9LcOU9UPk4mygXHbbf-4LnRteLlpu75mz468AMTmN1QNP1fCYdWcHiVsnIVhvQavustFsg__"
          />
          <h2 className="my-auto">TIFICATIONS</h2>
        </header>
      </Link>

      <article className="container flex min-w-full gap-20">
        <ul className="flex flex-col gap-10">
          {getKeys(notifications).map((category, index) => (
            <li key={index}>
              <Link
                href={{ query: { notificationCategory: category } }}
                scroll={false}
              >
                <button
                  className={clsx(
                    'button w-[448px] rounded-xl border p-8 font-serif text-2xl drop-shadow-2xl',
                    category == currentCategory
                      ? 'border-shade-light bg-primary-700 text-shade-light'
                      : 'bg-opacity-60'
                  )}
                >
                  {notifications[category].localisedName}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <section className="grow truncate rounded-xl bg-background/[0.6] px-8 pt-10 shadow-[0px_8px_0px_#e13f32_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)] drop-shadow-2xl">
          <ol className="h-[438px] overflow-y-scroll">
            {notifications[currentCategory].items.map(
              ({ label, value }, index) => (
                <li key={index}>
                  <Link
                    className="inline-flex max-w-full"
                    href={`/${locale}/${value}`}
                  >
                    <MdOutlineKeyboardArrowRight
                      className="my-auto text-primary-700"
                      size={24}
                    />
                    <p className="mb-0 truncate text-lg">{label}</p>
                  </Link>
                  <hr className="my-5 opacity-20" />
                </li>
              )
            )}
          </ol>

          <footer className="mx-auto mt-auto max-w-fit">
            <Link href={`/${locale}/noticeboard`}>
              <button className="px-5 py-3 text-lg font-bold text-primary-700">
                {text.viewAll}
              </button>
            </Link>
          </footer>
        </section>
      </article>
    </article>
  );
}
