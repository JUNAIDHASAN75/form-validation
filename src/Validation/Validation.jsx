import { useForm } from "react-hook-form";

const Validation = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
        console.log(data)
        reset()
    }
    return (
        <div className="max-w-[900px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="flex flex-col my-4">
                    <label htmlFor="Name">
                        <span className="text-xl font-normal">Name</span>
                    </label>
                    <input className="input w-full border-2 p-4 rounded-md my-4" type="text" placeholder="Name" {...register("name", { required: true })} />
                    {errors.name && <span className='text-orange-600'>Name is required</span>}
                </div>
                {/* Email Field */}
                <div className="flex flex-col my-4">
                    <label htmlFor="Name">
                        <span className="text-xl font-normal">Email</span>
                    </label>
                    <input className="input w-full border-2 p-4 rounded-md my-4" type="email" placeholder="Email" {...register('email', { required: true })} />
                    {errors.email && <span className='text-orange-600'>Email is required</span>}
                </div>
                
                <div className="flex flex-col my-4">
                    <label htmlFor="Name">
                        <span className="text-xl font-normal">Password</span>
                    </label>
                    <input className="input w-full border-2 p-4 rounded-md my-4" type="password" placeholder="Password" {...register('password', {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })} />
                    {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password must be six characters</p>}
                    {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert">Password must be less than characters</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">Password must have one uppercase,one lowercase, one number and one special character</p>}
                </div>

                <div className="flex flex-col my-4">
                    <label htmlFor="Name">
                        <span className="text-xl font-normal">Confirm Password</span>
                    </label>
                    <input className="input w-full border-2 p-4 rounded-md my-4" type="password" placeholder="Confirm Password" 
                    {...register('confirmPassword',{
                        required: true,validate:(value)=> value === watch('password') || 'the password do not match'
                    })}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>
                <div className="flex flex-col my-4">
                    <label htmlFor="Name">
                        <span className="text-xl font-normal">Name</span>
                    </label>
                    <input className="input w-full border-2 p-4 rounded-md my-4" type="text" placeholder="Name" />
                </div>
                <div className=" my-4">
                    <input className="cursor-pointer bg-purple-900 text-white text-xl px-4 py-2 rounded-md" type="submit" value="SUBMIT" />
                </div>

            </form>
        </div>
    );
};

export default Validation;