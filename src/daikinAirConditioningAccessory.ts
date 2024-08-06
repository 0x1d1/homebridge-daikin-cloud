import {Service, PlatformAccessory, CharacteristicValue} from 'homebridge';
import {DaikinCloudAccessoryContext, DaikinCloudPlatform} from './platform';
import {daikinAccessory} from './daikinAccessory';
import {ClimateControlService} from "./climateControlService";

export class daikinAirConditioningAccessory extends daikinAccessory {
    private extraServices = {
        POWERFUL_MODE: 'Powerful mode',
        ECONO_MODE: 'Econo mode',
        STREAMER_MODE: 'Streamer mode',
        OUTDOUR_SILENT_MODE: 'Outdoor silent mode',
        INDOOR_SILENT_MODE: 'Indoor silent mode',
        DRY_OPERATION_MODE: 'Dry operation mode',
        FAN_ONLY_OPERATION_MODE: 'Fan only operation mode',
    };

    private service: ClimateControlService;

    constructor(
        platform: DaikinCloudPlatform,
        accessory: PlatformAccessory<DaikinCloudAccessoryContext>,
    ) {
        super(platform, accessory);
        this.service = new ClimateControlService(this.platform, this.accessory, 'climateControl');
    }
}


export type DaikinClimateControlEmbeddedId = 'climateControl' | 'climateControlMainZone';
