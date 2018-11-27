import module from './module';
import config from './config';

describe(`${module.name} module`, function() {
  it('should load successfully', function() {
    expect(module.name).toBe(config.NAMESPACE);
  });
});
