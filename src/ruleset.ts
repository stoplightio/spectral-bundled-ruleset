
// import { oas2, oas3 } from "@stoplight/spectral-formats";
// import { truthy, schema } from "@stoplight/spectral-functions";
import { oas } from '@stoplight/spectral-rulesets';
import owaspRuleset from '@stoplight/spectral-owasp-ruleset';

export default {
  extends: [oas, owaspRuleset],
};
