export default function List({ data }) {
    function sendEmail(){
      
    }
  
    return (
      <ul>
        {/* 順番ID順にならないからsort, 
        localeCompareにしたのはここの_idはObjectIdだから数値として引き算できないから　
        */}
        {data.sort((a, b) => a._id.localeCompare(b._id)).map((user) => (
          <li key={user._id} onClick = {() => sendEmail()}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  }