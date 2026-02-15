const InputBox = ({ icon: Icon, className, ...props }) => {
    return (
        <div
            className={`bg-white border border-gray-300 font-semibold text-lg flex items-center gap-3  py-3 px-5 w-full rounded-full ${className}`}
        >
            {Icon && <Icon className="max-sm:h-5 max-sm:w-5" />}
            <input {...props} className={` outline-none w-full`} />
        </div>
    );
};

export default InputBox;
