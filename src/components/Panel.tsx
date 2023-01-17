const Panel = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
      {children}
    </div>
  );
};

export default Panel;
