const delivery = (hour, policy) => {
  if (hour >= policy.morningDelivery.start
    && hour < policy.morningDelivery.end) {
    return '샛별배송입니다'
  }

  if (hour >= policy.normalDelivery.start
    && hour < policy.normalDelivery.end) {
    return '택배배송입니다'
  }

  return '주문이 불가능합니다'
}

test('delivery', () => {
  const policy = {
    morningDelivery: {
      start: 9,
      end: 20,
    },
    normalDelivery: {
      start: 20,
      end: 23,
    }
  }

  expect(delivery(0, policy)).toBe('주문이 불가능합니다');
  expect(delivery(1, policy)).toBe('주문이 불가능합니다');
  expect(delivery(2, policy)).toBe('주문이 불가능합니다');
  expect(delivery(3, policy)).toBe('주문이 불가능합니다');
  expect(delivery(4, policy)).toBe('주문이 불가능합니다');
  expect(delivery(5, policy)).toBe('주문이 불가능합니다');
  expect(delivery(6, policy)).toBe('주문이 불가능합니다');
  expect(delivery(7, policy)).toBe('주문이 불가능합니다');
  expect(delivery(8, policy)).toBe('주문이 불가능합니다');
  expect(delivery(9, policy)).toBe('샛별배송입니다');
  expect(delivery(10, policy)).toBe('샛별배송입니다');
  expect(delivery(11, policy)).toBe('샛별배송입니다');
  expect(delivery(12, policy)).toBe('샛별배송입니다');
  expect(delivery(13, policy)).toBe('샛별배송입니다');
  expect(delivery(14, policy)).toBe('샛별배송입니다');
  expect(delivery(15, policy)).toBe('샛별배송입니다');
  expect(delivery(16, policy)).toBe('샛별배송입니다');
  expect(delivery(17, policy)).toBe('샛별배송입니다');
  expect(delivery(18, policy)).toBe('샛별배송입니다');
  expect(delivery(19, policy)).toBe('샛별배송입니다');
  expect(delivery(20, policy)).toBe('택배배송입니다');
  expect(delivery(21, policy)).toBe('택배배송입니다');
  expect(delivery(22, policy)).toBe('택배배송입니다');
  expect(delivery(23, policy)).toBe('주문이 불가능합니다');
});