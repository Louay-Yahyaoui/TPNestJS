import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatusEnum } from '../../common/Constants&errorMessages';
import { DatesCRD } from '../../common/datesCRD';

@Entity('todo')
export class TodoEntity extends DatesCRD {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  statut: string;
}
