import numeral from 'numeral';
import Vue from 'vue';

Vue.filter('formatId', (id) => {
	return numeral(id).format('000');
});

Vue.filter('formatPagination', (pagination) => {
	return numeral(pagination).format('00');
});
