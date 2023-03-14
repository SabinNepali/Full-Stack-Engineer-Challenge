import mongoose, {Schema, model, Document} from "mongoose"

// Define interface for Result document
export interface ResultDocument extends Document {
    id: any;
    status: 'Queued' | 'In Progress' | 'Success' | 'Failure';
    repositoryName: string;
    findings: Record<string, any>;
    queuedAt: Date;
    scanningAt: Date;
    finishedAt: Date;
  }

  interface Result{
    id: any;
    status: 'Queued' | 'In Progress' | 'Success' | 'Failure';
    repositoryName: string;
    findings: Record<string, any>;
    queuedAt: Date;
    scanningAt: Date;
    finishedAt: Date;
  }

  // Define Result schema
const ResultSchema: Schema = new Schema<Result>(
    {
      id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
        required: true,
      },
      status: {
        type: String,
        enum: ['Queued', 'In Progress', 'Success', 'Failure'],
        required: true,
      },
      repositoryName: {
        type: String,
        required: true,
      },
      findings: {
        type: Schema.Types.Mixed,
        required: false,
      },
      queuedAt: {
        type: Date,
        required: true,
      },
      scanningAt: {
        type: Date,
      },
      finishedAt: {
        type: Date,
      },
    },
    { timestamps: true } // Add createdAt and updatedAt timestamps
  );
  
    const ResultModel = model<Result>('Result', ResultSchema)

  // Export Result model
  export default ResultModel;