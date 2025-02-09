const Form = () => {
  return (
    <div className="m-auto max-w-[1200px] p-6">
      <h3 className="text-2xl">Add another city</h3>
      <form className="">
        <label htmlFor="cityName">City</label>
        <input className = "border-b-blue-950 border-1" id="cityName" type="text"></input>

        <label htmlFor="countryName">Country</label>
        <input className = "border-b-blue-950 border-1" id="countryName" type="text"></input>

        <label htmlFor="description">Description</label>
        <textarea className = "border-b-blue-950 border-1" id="description"></textarea>

        <input className = "border-b-blue-950 border-1" type= "file" />


        <input value="Submit" className = "border-1" type="submit" />
      </form>
    </div>
  );
};

export default Form;
