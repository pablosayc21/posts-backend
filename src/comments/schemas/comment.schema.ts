import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Comment extends Document {

    @Prop({ type: Types.ObjectId, required: true })
    postId: Types.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    email: string;

    @Prop({ required: true })
    body: string;

}

export const commentSchema = SchemaFactory.createForClass(Comment);