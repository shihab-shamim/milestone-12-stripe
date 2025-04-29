

const SectionTitle = ({headding,subHeadding}) => {
    return (
        <div className="text-center mx-auto md:w-4/12 my-8">
            <p  className="text-yellow-300 mb-2">{subHeadding}</p>
            <h3 className="text-xl border-y-2  py-4 border-gray-500"> {headding} </h3>
            
        </div>
    );
};

export default SectionTitle;