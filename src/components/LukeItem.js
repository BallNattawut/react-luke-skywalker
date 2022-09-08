import "./LukeItem.css";
function LukeItem(props) {
  const { quotes } = props;
  return (
  
    <div className="box-card">
      <img src={quotes.img_card} alt="" />
      <div className="box-card-title">
        <p>{quotes.title}</p>
        <h4><b>{quotes.movie}</b></h4>
      </div>
    </div> 
  );
}

export default LukeItem;
