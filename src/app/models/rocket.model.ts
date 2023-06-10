export interface Rockets {
  rocket_id?: string;
  name: string;
  type: string;
  active: String;
  country: String;
  company: String;
  cost_per_launch: number;
}

export interface createRocketDTO extends Rockets{

}

export interface updateRocketsDTO extends Partial<createRocketDTO>{}
