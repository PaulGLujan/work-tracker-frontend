const FormLabel = ({ children }: React.PropsWithChildren) => {
  return (
    <label className="mb-2 block text-sm font-bold text-gray-700">
      {children}
    </label>
  );
};

export default FormLabel;
