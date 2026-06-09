interface Props {
    name?: string;
    age?: number;
}

export default function HelloProps({name, age}:Props){


    return(
        <div className="text-sm italic font-semibold">
            Hello, {name}({age})! Have a Nice Day In SI.
        </div>
    )
}