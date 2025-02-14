export function Footer() {
  return (
    <footer className="flex items-center bg-white dark:bg-neutral-800 sm:hidden drop-shadow-[0px_3px_5px_rgba(0,0,0,0.25)] lg:flex">
      <div className="container flex flex-col gap-10 py-5">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-1">
          {/* Seção de Sobre */}
          <div className="flex flex-col gap-1 items-center md:items-start text-gray-600 dark:text-neutral-400">
            <span className="text-2xl text-yellow-400 font-bold mb-1.5">
              Sobre
            </span>
            <span>Nossa História</span>
            <span>Política de Privacidade</span>
            <span>Termos de Uso</span>
            {/* Feito com Amor */}
            <div className="mt-4 text-sm text-gray-600 dark:text-neutral-400">
              <span>feito com amor ♡ em 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
