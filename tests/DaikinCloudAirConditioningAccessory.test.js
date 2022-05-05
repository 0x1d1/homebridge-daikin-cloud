"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_1 = require("../src/platform");
const DaikinCloudAirConditioningAccessory_1 = require("../src/DaikinCloudAirConditioningAccessory");
jest.mock('Service');
jest.mock('CharacteristicValue');
jest.mock('PlatformAccessory');
describe('Get All', () => {
    it('should return an array of existing recipes', async () => {
        const acs = new DaikinCloudAirConditioningAccessory_1.DaikinCloudAirConditioningAccessory(new platform_1.DaikinCloudPlatform());
        expect(2).toEqual(3);
    });
});
//# sourceMappingURL=DaikinCloudAirConditioningAccessory.test.js.map