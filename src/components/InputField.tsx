import { FieldError } from "react-hook-form"

function InputField({
    label, 
    name, 
    type="text", 
    register, 
    defaultValue, 
    error,
    inputProps
}: {
    label: string, 
    name: string, 
    type: string, 
    register: any, 
    defaultValue: string, 
    error?: FieldError,
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}) {
    return (
        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label htmlFor={name} className='text-sm text-gray-500'>{label}</label>
            <input
                id={name}
                type={type} 
                {...register(name)} 
                {...inputProps}
                defaultValue={defaultValue}
                className='ring-[1.5px] ring-gray-300 rounded-md p-2'
            />
            {error?.message && <p className='text-sm text-red-500'>{error.message}</p>}
        </div>    
    )
}

export default InputField;