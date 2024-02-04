const Separator = () => {
  return (
    <div className="w-full h-[1px] bg-primary relative my-2 top-3">
      <span className="absolute top-0 left-1/2 bg-white rounded-full translate-y-[-50%] translate-x-[-50%] w-7 h-7 text-center">
        or
      </span>
    </div>
  );
};

export default Separator;
