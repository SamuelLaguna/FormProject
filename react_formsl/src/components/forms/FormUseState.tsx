const FormUseState = () => {
  return (
    <>
      <h1 className="text-center">component using useState</h1>
      <form>
        <div className="mb -3 myContainer">
          <label htmlFor="" className="label">Name</label>
          <input id="name" type="text" className="form-control" />
          <label htmlFor="" className="label">Age</label>
          <input id="age" type="number" className="form-control" />
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>

      </form>
    </>
  );
};

export default FormUseState;
