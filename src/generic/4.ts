/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component <T> {
  constructor (public props:T) {

  }
}

interface IforPage {
title: string
}

class Page extends Component <IforPage>{
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};