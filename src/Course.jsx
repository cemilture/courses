function Course({ id, content, title, price, removeOnecourse }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price}TL</h4>
      </div>
      <p>{content}</p>
      <button className="cardDeleteBtn" onClick={() => removeOnecourse(id)}>
        Sil
      </button>
    </div>
  );
}

export default Course;
