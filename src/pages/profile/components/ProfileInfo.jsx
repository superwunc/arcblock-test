
function ProfileInfo({data, onUpdate}) {
  
  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="has-text-primary has-text-weight-bold">{data.name ? data.name : ''}</div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="has-text-primary has-text-weight-bold">{data.email ? data.email : ''}</div>
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <div className="has-text-primary has-text-weight-bold">{data.phone ? data.phone : ''}</div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={() => {
            onUpdate && onUpdate();
          }}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
