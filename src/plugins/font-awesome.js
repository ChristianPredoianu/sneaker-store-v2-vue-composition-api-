import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, fas } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FontAwesomeIcon from '@/lib/FontAwesomeIcon.vue';

library.add(fas, faTwitter, faInstagram, faCartPlus);

export { FontAwesomeIcon };
