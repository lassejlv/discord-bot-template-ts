import { Schema, SchemaTypes, model } from "mongoose";

interface Guild {
    guild_id: string;
}

const GuildSchema = new Schema<Guild>({
    guild_id: {
        type: SchemaTypes.String,
        required: true,
    },
});


export default model<Guild>("Guild", GuildSchema);