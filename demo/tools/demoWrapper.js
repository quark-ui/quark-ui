export default Comp => () => {
  return (
    <div className="demo-block">
      {Comp.displayName}
      <Comp {...this.props} />
    </div>
  );
};
