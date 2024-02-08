describe('test greet()', function() {
  it('should greet name givin', function() {
    expect(greet('Elizabeth')).toEqual('Hello, Elizabeth');
  })
  it('should manage null values', function() {
    expect(greet()).toEqual('Hello there!');
  })
  it('should manage uppercase', function() {
    expect(greet('JOSE')).toEqual('HELLO JOSE!');
  })
  it('should manage two names', function() {
    expect(greet(['Jose','Pep'])).toEqual('Hello, Jose, Pep');
  })
  it('should manage arbitrary number of names', function() {
    expect(greet(['Alex','Arsene','Jose','Zidane'])).toEqual(
      'Hello, Alex, Arsene, Jose, Zidane');
  })
})