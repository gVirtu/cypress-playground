class CellData {
  constructor(props) {
    const {
      mine = false,
      adjacentCount = 0,
      clicked = false,
      flagged = false,
    } = props;

    this.mine = mine;
    this.adjacentCount = adjacentCount;
    this.clicked = clicked;
    this.flagged = flagged;
  }

  props() {
    const {
      mine, adjacentCount, clicked, flagged,
    } = this;

    return {
      mine, adjacentCount, clicked, flagged,
    };
  }

  hasMine() {
    return this.mine;
  }

  wasClicked() {
    return this.clicked;
  }

  click() {
    this.clicked = true;
  }

  wasFlagged() {
    return this.flagged;
  }

  getAdjacentCount() {
    return this.adjacentCount;
  }
}

export default CellData;
