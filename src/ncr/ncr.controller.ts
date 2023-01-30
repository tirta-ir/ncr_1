/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NcrService } from './ncr.service';

@Controller('ncr')
export class NcrController {
  constructor(private ncrService: NcrService) {}

  @Get()
  getAllNcr() {
    return this.ncrService.all();
  }

  @Get(':id')
  async getNcr(@Param('id') id: number) {
    const ncr = await this.ncrService.get(+id);
    if (!ncr) {
      throw new NotFoundException(
        'NCR RECORD NOT FOUND',
      );
    }
    return this.ncrService.get(+id);
  }

  @Post()
  async addNcr(
    @Body()
    body: {
      audit_plan_no: string;
      ncr_no: string;
      issued_date: string;
      responsibility_office: string;
      audit_type: string;
      level_of_finding: number;
      require_condition: string;
      problem_analysis: boolean;
      answer_due_date: string;
      encountered_condition: string;
      originator: string;
      data_send: string;
      accepted_by: string;
      accepted_date: string;
    },
  ) {
    return await this.ncrService.create({
      audit_plan_no: body.audit_plan_no,
      ncr_no: body.ncr_no,
      issued_date: body.issued_date,
      responsibility_office:
        body.responsibility_office,
      audit_type: body.audit_type,
      require_condition: body.require_condition,
      level_of_finding: body.level_of_finding,
      problem_analysis: body.problem_analysis,
      answer_due_date: body.answer_due_date,
      encountered_condition:
        body.encountered_condition,
      originator: body.originator,
      data_send: body.data_send,
      accepted_by: body.accepted_by,
      accepted_date: body.accepted_date,
    });
  }

  @Delete(':id')
  async removeNcr(@Param('id') id: number) {
    return await this.ncrService.remove(+id);
  }

  @Patch(':id')
  async updateNcr(
    @Param('id') id: number,
    @Body()
    body: {
      audit_plan_no?: string;
      ncr_no?: string;
      issued_date?: string;
      responsibility_office?: string;
      audit_type?: string;
      level_of_finding?: number;
      require_condition?: string;
      problem_analysis?: boolean;
      answer_due_date?: string;
      encountered_condition?: string;
      originator?: string;
      data_send?: string;
      accepted_by?: string;
      accepted_date?: string;
    },
  ) {
    return await this.ncrService.update(+id, {
      audit_plan_no: body.audit_plan_no,
      ncr_no: body.ncr_no,
      issued_date: body.issued_date,
      responsibility_office:
        body.responsibility_office,
      audit_type: body.audit_type,
      require_condition: body.require_condition,
      level_of_finding: body.level_of_finding,
      problem_analysis: body.problem_analysis,
      answer_due_date: body.answer_due_date,
      encountered_condition:
        body.encountered_condition,
      originator: body.originator,
      data_send: body.data_send,
      accepted_by: body.accepted_by,
      accepted_date: body.accepted_date,
    });
  }
}
