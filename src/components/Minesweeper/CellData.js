class CellData {
  constructor(props) {
    const {
      mine = false,
      adjacentCount = 0,
      clicked = false,
      flagged = false,
      clustered = false,
    } = props;

    this.mine = mine;
    this.adjacentCount = adjacentCount;
    this.clicked = clicked;
    this.flagged = flagged;
    this.clustered = clustered;
  }

  props() {
    const {
      mine, adjacentCount, clicked, flagged, clustered
    } = this;

    return {
      mine, adjacentCount, clicked, flagged, clustered
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

  isClustered() {
    return this.clustered;
  }
}

export default CellData;
