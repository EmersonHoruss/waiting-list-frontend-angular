import { CInput } from '../models/CInput';
import { EIdentifier } from '../models/EIdentifier';
import { EInputType } from '../models/EInputType';

export const DIdentifierInput = new CInput()
  .setLabel(EIdentifier.id)
  .setPropertyBackend(EIdentifier.id)
  .setType(EInputType.identifier);
