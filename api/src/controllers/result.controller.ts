import { Request,Response } from "express";
import Result from "../models/result.model";

const getAllResult = async (req: Request, res: Response) => {
    try {
        const result = await Result.find();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}

const getResultById = async (req: Request, res: Response) => {
    try {
        const result = await Result.findById(req.params.id);
        if (result) {
            res.json(result);
        } else {
            res.status(404).send("Result not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}

const createResult = async (req:Request, res:Response) => {
    try{
        const result = new Result(req.body);
        await result.save();
        res.json(result);
    } catch(error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

const updateResult = async (req: Request, res: Response) => {
    try {
        const result = await Result.findById(req.params.id);
        if (result) {
            result.status = req.body.status || result.status;
            result.repositoryName = req.body.repositoryName || result.repositoryName;
            result.findings = req.body.findings || result.findings;
            result.queuedAt = req.body.queuedAt || result.queuedAt;
            result.scanningAt = req.body.scanningAt || result.scanningAt;
            result.finishedAt = req.body.finishedAt || result.finishedAt;
            await result.save();
            res.json(result);
        } else {
            res.status(404).send("Result not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};

const deleteResult = async (req: Request, res: Response) => {
    try {
        const result = await Result.findByIdAndDelete(req.params.id);
        if (result) {
            res.json(result);
        } else {
            res.status(404).send("Result not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};




export{
    getAllResult,
    getResultById,
    createResult,
    updateResult,
    deleteResult
}