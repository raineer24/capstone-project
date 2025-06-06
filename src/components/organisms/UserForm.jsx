import FormGroup from "../molecules/FormGroup";
import Button from "../atoms/Button";

const UserForm = ({
    formData,
    onChange,
    onSubmit,
    errors = {},
    submitText = 'Submit',
    showCancel = false,
    onCancel
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-md">
            <FormGroup
                label="Name"
                name='name'
                value={formData.name  || ''}
                onChange={onChange}
                placeholder='Enter your name'
                required
                error={errors.name}
            />

             <FormGroup
                label="Email"
                name='email'
                type='email'
                value={formData.name  || ''}
                onChange={onChange}
                placeholder='Enter your name'
                required
                error={errors.name}
            />

           
        </form>
    )
};

export default UserForm;