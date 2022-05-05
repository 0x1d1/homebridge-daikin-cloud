import {Service, PlatformAccessory, CharacteristicValue} from 'homebridge';
import {DaikinCloudPlatform} from '../src/platform';

import { DaikinCloudAirConditioningAccessory } from '../src/DaikinCloudAirConditioningAccessory';

jest.mock('Service');
jest.mock('CharacteristicValue');
jest.mock('PlatformAccessory');

describe('Get All', () => {
    it('should return an array of existing recipes', async () => {
        const acs = new DaikinCloudAirConditioningAccessory(new DaikinCloudPlatform(), )
        expect(2).toEqual(3)
    });
});
