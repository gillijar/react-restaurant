const CartForm = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Address</label>
        <input type="text" />
      </div>
      <div>
        <label>City</label>
        <input type="text" />
      </div>
      <div>
        <label>Zip Code</label>
        <input type="number" maxLength="5" />
      </div>
    </form>
  );
};

export default CartForm;
