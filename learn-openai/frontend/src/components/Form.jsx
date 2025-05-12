import React from "react";

const Form = ({ setResult }) => {
  const handleEdit = (e) => {
    setResult((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="textarea">入力欄</label>
        <textarea
          id="textarea"
          name="input"
          type="text"
          onChange={handleEdit}
        ></textarea>

        <div className="options">
          <div>
            <label htmlFor="age">年代</label>
            <select id="age" name="age" onChange={handleEdit}>
              <option value="10">10代</option>
              <option value="20">20代</option>
              <option value="30">30代</option>
              <option value="40">40代</option>
              <option value="50">50代</option>
              <option value="60">60代</option>
              <option value="70">70代</option>
              <option value="80">80代</option>
              <option value="90">90代</option>
              <option value="100">100代</option>
            </select>
          </div>
          <div>
            <label htmlFor="characteristic">特徴</label>
            <select
              id="characteristic"
              name="characteristic"
              onChange={handleEdit}
            >
              <option value="gal">ギャル</option>
              <option value="edo">江戸っ子</option>
              <option value="business">ビジネス</option>
              <option value="ojou">お嬢様</option>
              <option value="tsugaru">津軽弁</option>
              <option value="hanawa">花輪くん</option>
              <option value="ojisan">おじさん</option>
              <option value="kogo">古語</option>
              <option value="tsuppari">ツッパリ</option>
              <option value="kansai">関西弁</option>
            </select>
          </div>
        </div>

        <input type="submit" className="formBtn"></input>
      </form>
    </div>
  );
};

export default Form;
