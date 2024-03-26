import { useForm } from 'react-hook-form';

function ProfileEditor({ data, onSave, onCancel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: data,
  });

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" {...register('name', { required: 'The name cannot be empty' })} />
        </div>
        {errors && errors.name && <p className="help is-danger">{errors.name.message}</p>}
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            {...register('email', {
              required: 'The email cannot be empty',
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'This email is invalid',
              },
            })}
          />
        </div>
        {errors && errors.email && <p className="help is-danger">{errors.email.message}</p>}
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <div className="control">
          <input className="input" type="text" {...register('phone', { required: 'The phone cannot be empty' })} />
        </div>
        {errors && errors.phone && <p className="help is-danger">{errors.phone.message}</p>}
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">
            Save
          </button>
        </div>
        <div className="control">
          <button
            className="button is-link is-light"
            onClick={() => {
              onCancel && onCancel();
            }}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProfileEditor;
