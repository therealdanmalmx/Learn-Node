import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autoComplete';

autocomplete(
    $('#name'),
    $('#address'),
    $('#lat'),
    $('#lng'),
)

