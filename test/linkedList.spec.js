import LinkedList from 'src/linkedList';
import { expect } from 'chai';

describe('Test LinkedList append function =>', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);

  it('length should be 1', () => {
    expect(ll.length).to.be.equal(2);
  });

  it('the value of the head should be 1', () => {
    expect(ll.head.value).to.be.equal(1);
  });
});

describe('Test LinkedList valueOf function =>', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);

  it('the result should equal [1, 2]', () => {
    expect(ll.valueOf()).to.deep.equal([1, 2]);
  });
});

describe('Test LinkedList insert function =>', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.insert(1, 3);

  it('the result should equal [1, 3, 2]', () => {
    expect(ll.valueOf()).to.deep.equal([1, 3, 2]);
  });
})

describe('Test LinkedList removeAt function =>', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);
  ll.removeAt(1);

  it('the result should equal [1, 3]', () => {
    expect(ll.valueOf()).to.deep.equal([1, 3]);
  });
})
