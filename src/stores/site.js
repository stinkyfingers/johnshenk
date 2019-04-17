import Reflux from 'reflux';
import SiteActions from '../actions/site';

const SiteStore = Reflux.createStore({
	listenables: [SiteActions],

	show: function(article) {
		switch (article) {
			case 'resume':
				this.trigger({ resume: true, projects: false });
				break;
			case 'projects':
				this.trigger({ resume: false, projects: true });
				break;
			default:
		}
		
	}
});
module.exports = SiteStore;