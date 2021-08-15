export const transformStrings = (item_one, item_two, item_three) => `${item_one ? item_one +',' : ''} ${item_two ? item_two +',' : ''} ${item_three ? item_three : ''}`;

export const isAirportOrCity = bookingId => bookingId && bookingId.split("-")[0];