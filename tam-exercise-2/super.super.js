class A {
  constructor(){
    console.log('A');
  }
}

class B extends A {
  constructor(){
    super();
  }
}

class C extends B {
  constructor(){
    super();
  }
}

new C();