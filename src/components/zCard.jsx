function Card(props) {
    const { variant, extra, children, ...rest } = props;
    return (
      <div
        className={`!z-5 relative border border-gray-300 m-3 flex flex-col rounded-md bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none ${extra}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
  
  export default Card;
  