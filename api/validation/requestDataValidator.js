const Ajv = require('ajv');

const ajv = new Ajv({  allErrors: true, $data: true, strictTypes:false });
require('ajv-keywords')(ajv);

function validator(data, schema, relatedSchemas) {
    const validate = ajv.addSchema(relatedSchemas).compile(schema);
    if (!validate) throw Error('Invalid AJV schema');
    const valid = validate(data);
    if (!valid) return validate.errors;
    return undefined;
}

module.exports = { validator };
