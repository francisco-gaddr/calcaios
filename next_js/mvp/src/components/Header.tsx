interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const styles = {
    header: [
      'fixed',
      'top-0',
      'left-0',
      'w-full',
      'flex',
      'justify-between',
      'items-center',
      'p-10',
      'z-50'
    ].join(' ')
  };

  return (
    <div className={styles.header}>
      <b className='ml-10'>CalcAios</b>
      {children && <div>{children}</div>}
    </div>
  );
}